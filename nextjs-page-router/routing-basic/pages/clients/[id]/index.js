import {useRouter} from "next/router";
import clientprojectid from "./[clientprojectid]";

function ClientProjectsPage() {
    const router = useRouter();

    // console.log(router.query);

    function loadProjectHandler() {
        // router.push("/clients/max/project");
        router.push({
            pathname: "/clients/[id]/[clientprojectid]",
            query: {
                id: "max",
                clientprojectid: "project",
            }
        })
    }

    return (
        <div>
            <h1>The Projects of a Given Client</h1>
            <button onClick={loadProjectHandler}>Load Project</button>
        </div>
    )
}

export default ClientProjectsPage;