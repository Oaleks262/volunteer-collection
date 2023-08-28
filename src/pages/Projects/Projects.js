import React from "react";
import'./Projects.css';
import ButtonProject from "../../components/Button/Button-project/Button-project";
import proect1 from '../../assets/images/desktop-rectangle-8.png';
import proect2 from '../../assets/images/desktop-rectangle-9.png';
import proect3 from '../../assets/images/desktop-rectangle-7.png';
import icontr from '../../assets/images/icon-arrow-tr.svg';

const Projects = () => {

    return(
        <div className="Projects">
            <div className="Projects-title">
                <div className="Projects-title-text">
                    <h2>Наші<br/>проекти</h2>
                    <div className="Projects-line">

                    </div>
                </div>
                <ButtonProject href='#'>Більше проектів<img src={icontr}/></ButtonProject>
            </div>
            <div className="Projects-total">
                <div className="Project-total-1">
                    <img src={proect1}/>
                    <div className="Project-total-1-text">
                        <p>
                        Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних матеріалах просто вееелеетенська - це і рації, і 
                        </p>
                        <a href="#">читати більше <img src={icontr}/></a>
                    </div>
                </div>
               <div className="Pt1">
               <div className="Project-total-2">
                    <img src={proect2}/>
                    <div className="Project-total-2-text">
                        <p>
                        Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба в розхідних
                        </p>
                        <a href="#">читати більше <img src={icontr}/></a>
                    </div>
                </div>
                <div className="Project-total-3">
                    <img src={proect3}/>
                    <div className="Project-total-3-text">
                        <p>
                        Ми – 57 бригада та беремо участь у найзапекліших боях. Тому потреба
                        </p>
                        <a href="#">читати більше <img src={icontr}/></a>
                    </div>
                </div>

               </div>

            </div>
        </div>
    );



}

export default Projects;