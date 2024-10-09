export default function Skills(){
    return (
        <table className="table table-primary table-striped table-bordered p-2 m-2">
            <thead>
                <tr>
                    <th className="bg-primary text-white">Skill</th>
                    <th className="bg-primary text-white">Description</th>
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
            </tbody>
        </table>
    );
}