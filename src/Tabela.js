function Tabela({ vetor, selecionar }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Nome</th>
          <th>Marca</th>
          <th>selecionar</th>
        </tr>
      </thead>

      <tbody>
        {
          vetor.map((obj, indice) => (
            <tr key={indice}>
              <td>{indice + 1}</td>
              <td>{obj.nome}</td>
              <td>{obj.marca}</td>
              <td><button onClick={() => { selecionar(indice) }} className="btn btn-success">selecionar</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
export default Tabela;