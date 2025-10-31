import { AdminAllStoriesTableRow } from "./AdminAllStoriesTableRow";

export function AdminAllStoriesTable({ list }) 

{console.log(list);
    
    return (


        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div >
                        <table className="redTable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Foto</th>
                                    <th>Titulinis</th>
                                    <th>Url</th>
                                    <th>Istorija</th>
                                    <th>Statusas</th>
                                    <th>Veiksmai</th>
                                 </tr>
                            </thead>
                            <tbody>
                             
                               
                         {list.map(item =><AdminAllStoriesTableRow key={item.id} story={item}/>)}
                        </tbody> 
                    </table>
                    </div>
                </div>
            </div>
        </div>
    

);
}

  

