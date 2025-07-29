import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdateAt />
      <InfomacoesServidor />
    </>
  );
}

function InfomacoesServidor() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });
  const { dependencies } = data || {};

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      {!isLoading && dependencies && (
        <>
          <pre
            style={{
              backgroundColor: "#dfdfdf",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h2>Dados do servidor:</h2>

            <p>Versão do banco de dados: {dependencies.database.version}</p>
            <p>Conexões máxima: {dependencies.database.max_connections}</p>
            <p>conexões abertas: {dependencies.database.opened_connections}</p>
          </pre>
        </>
      )}
    </>
  );
}

function UpdateAt() {
  const { data, isLoading } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updateAtText = "Carregando...";

  if (!isLoading && data) {
    updateAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return (
    <>
      <div>Última atualização: {updateAtText}</div>
    </>
  );
}
