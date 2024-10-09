export default function Skills() {
  return (
    <div className="offset-4 col-3">
      <table className="table table-success table-striped table-bordered p-2 m-2">
        <thead>
          <tr>
            <th className="bg-success text-white text-center">Skill</th>
            <th className="bg-success text-white text-center">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Programming</td>
            <td>C, Java, Python, Web Technologies</td>
          </tr>
          <tr>
            <td>Databases</td>
            <td>MySQL, PostgreSQL, MS SQL, Oracle</td>
          </tr>
          <tr>
            <td>Operating Systems</td>
            <td>Windows, Linux</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
