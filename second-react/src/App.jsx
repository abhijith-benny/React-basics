import Header  from "./components/header";
import Entry from "./components/entry";
import data from "./data.js";

function AppContainer(){
    return (
        <>
            <Header />
            <main>
                {data.map(item => {
                    return (
                        <Entry 
                            key={item.id}
                            {...item}
                        />
                    );
                })}
            </main>
        </>
    );
}


export default AppContainer;