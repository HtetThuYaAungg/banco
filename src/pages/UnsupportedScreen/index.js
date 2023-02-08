import React from "react";
import Label from "../../components/utils/Label";
import Image from "../../components/utils/Image";
import styles from "./UnsupportedScreen.module.css";

function UnsupportedScreen() {
  return (
       <div className={styles.container}>
          <div className="row">
            <div className="col-12 col-md-4">
              <Image src="/media/images/sadImg.svg" alt="" />
            </div>
          </div>          
          <Label labelText="OOOPS!!" className={styles.lbloop}/>
          <Label labelText="Sorry! This resolution is not supported." className={styles.lblsorry}/>
      </div>
  );
}

export default UnsupportedScreen;
