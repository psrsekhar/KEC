export default function Project(data) {
    return (
        <div className="offset-3 col-6 p-2 m-2">
            <h4 className="text-success">Title: { data.title }</h4>
            <p>Tools : {data.tools }</p>
            <p>Duration : {data.duration } months</p>
            <p>Description: { data.description}</p>
        </div>
    );
}