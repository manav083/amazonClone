import React from "react";
import "./AmazonPrimeTrailer.css";

const AmazonPrimeTrailer = ({ name, image }) => {
  return (
    <div className="AmazonPrimeTrailer">
      <div className="AmazonPrimeTrailer__cover">
        <h2>Prime Video: Recommended for you</h2>
        <p>{name}</p>
        <span>
          <a
            href="https://www.amazon.in/gp/video/ssoredirect/?ie=UTF8&pvp=%2Fdetail%2Famzn1.dv.gti.2a67b1bd-15a9-414c-97e9-8ccb8380eff4&ref_=dvm_crs_in_dk_hud_rfy_np&source=standards&token=5AA88DFA9D67585B16D08920442C28AB49C39F2B&pf_rd_r=87GWN1YJM9AM07WMADNJ&pf_rd_p=07b1f595-ccae-454c-ace6-f75f048c6e6d&pd_rd_r=cb22fbbf-e084-4cde-a739-ba4cbcf46a24&pd_rd_w=07Vmz&pd_rd_wg=d6G71"
            target={"_blank"}
          >
            Start watching on Prime Video
          </a>
        </span>
      </div>
      <img src={image} />
    </div>
  );
};

export default AmazonPrimeTrailer;
