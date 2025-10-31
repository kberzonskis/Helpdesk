
import { Link } from "react-router";

import { SERVER_ADDRESS } from "../../../env";
import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";
import {NewStoryForm} from "../../components/NewStoryForm"



export function NewStoryPage(){


    return (
        <main >
            
            
             <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="fst-italic">Kurti naują istoriją</h3>
                    </div>
                </div>
            </div>
            
     
            
            <div style={{textAlign:"left"}}   className="container ">
            <div className="row ">
                  <NewStoryForm api={SERVER_ADDRESS + '/api/admin/stories'} method="POST" />
                </div>
            </div>
  
         </main>
    );
}
 













