import React, { useState } from "react";
import css from "./DownloadAppUtil.module.css";
import DiwaliHubDownloadApp from "/images/ZomatoDownloadApp.png";
import DownloadAppModal from "../../../Modals/DownloadAppModal/DownloadAppModal";

export default function DownloadAppUtil() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <section className={css.outerDiv}>
        <div className={css.innerDiv}>
          <div className={css.leftDiv}>
            <img
              src={DiwaliHubDownloadApp}
              alt="DiwaliHub app"
              className={css.img}
            />
          </div>

          <div className={css.rightDiv}>
            <div className={css.title}>Get the DiwaliHub app</div>

            <div className={css.tag}>
              We will send you a link, open it on your phone to download the app
            </div>

            <div className={css.optionBox}>
              <label className={css.label}>
                <input type="radio" name="share" defaultChecked />
                Email
              </label>

              <label className={css.label}>
                <input type="radio" name="share" />
                Phone
              </label>
            </div>

            <div className={css.inputBox}>
              <input
                type="text"
                placeholder="Email"
                className={css.input}
              />

              <button
                className={css.btn}
                onClick={() => setModal(true)}
              >
                Share App Link
              </button>
            </div>

            <div className={css.downloadTxt}>Download app from</div>

            <div className={css.storeBox}>
              <img
                src="/images/playstore.png"
                alt="Play Store"
                className={css.storeImg}
              />
              <img
                src="/images/appstore.png"
                alt="App Store"
                className={css.storeImg}
              />
            </div>
          </div>
        </div>
      </section>

      {modal && <DownloadAppModal setModal={setModal} />}
    </>
  );
}


