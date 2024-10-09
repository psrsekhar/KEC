import Project from "./Project";

export default function Projects() {
    const projectList = [
        {
            id: 1,
            title: "Telco Cloud (CAAS) Automation",
            tools: "Terraform, AWS, Linux Shell",
            duration: 6,
            description: "Played a key role in designing detailed Low-Level Design (LLD) and High-Level Design (HLD) for Continuous Integration/Continuous Deployment (CICD) and Platform as Code (PaCo) systems within the Telco Cloud environment."
        },
        {
            id: 2,
            title: "AI Cloud (CAAS) Automation",
            tools: "Terraform, Azure, Power Shell",
            duration: 6,
            description: "Played a key role in designing detailed Low-Level Design (LLD) and High-Level Design (HLD) for Continuous Integration/Continuous Deployment (CICD) and Platform as Code (PaCo) systems within the AI Cloud environment."
        }
    ];
    return (
        <>
            {
                projectList.map(project => (
                    <Project key={project.id} id={project.id} title={project.title} tools={project.tools} duration={project.duration} description={project.description} />
                ))
            }
        </>
    );
}