import React from "react";
import { Card } from "./styles";

export  function Card01(){
    return(
      <Card>
        <div className="container">
            <div className="card">
                <div className="img">
                    <span>Ideia</span>
                </div>

                <div className="content">
                    <span className="title">Titulo</span>
                    <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eum exercitationem voluptatem! Fugit, dolore? Quas magnam inventore doloribus molestias saepe iusto architecto quibusdam deserunt? Ipsum cumque vel quisquam iusto reiciendis!</p>
                </div>

                <div className="arrow">
                    <span>&#8673;</span>
                </div>
            </div>
        </div>
      </Card>
    )
  }