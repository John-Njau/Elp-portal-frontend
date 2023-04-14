import React, { useState } from "react";
import { RiCloseLine } from "react-icons/ri";

import styles from "./chapter.module.css";
import { axiosPublic } from "../../../../lib/axios/axios";

const HubModal = ({ setIsOpen, title, OnCancel, dataToPatch }) => {
  const [hubPostData, setHubPostData] = useState(
    dataToPatch
      ? {
          name: dataToPatch.name,
          hub_admin: dataToPatch.hub_admin,
          description: dataToPatch.description,
        }
      : {
          name: "",
          hub_admin: "",
          description: "",
        }
  );

  console.log("Data to patch", dataToPatch);

  const handleHubSubmit = (e) => {
    e.preventDefault();

    if (dataToPatch) {
      axiosPublic
      .patch(`api/hubs/${dataToPatch.id}/`, hubPostData)
        .then(() => {
          setHubPostData({
            name: "",
            hub_admin:"",
            description: "",
          })
          console.log("Cleaned Up Post Data", hubPostData)
          setIsOpen(false);
        })
        .catch((error) => console.log(error));
    } else {
    axiosPublic
      .post("api/hubs/", hubPostData)
      .catch((error) => console.log(error));

      setIsOpen(false);
    }

    setHubPostData({
      name: "",
      hub_admin: "",
      description: "",
    });

    
  };

  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>{title}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <form className={styles.form} onSubmit={handleHubSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Hub Name</label>
                <input
                  type="text"
                  className={styles.input}
                  value={hubPostData.name}
                  onChange={(e) =>
                    setHubPostData({ ...hubPostData, name: e.target.value })
                  }
                />
                <label className={styles.label}>Hub Admin</label>
                <input
                  type="text"
                  className={styles.input}
                  value={hubPostData.hub_admin}
                  onChange={(e) =>
                    setHubPostData({
                      ...hubPostData,
                      hub_admin: e.target.value,
                    })
                  }
                />
                <label className={styles.label}>Hub Description</label>
                <textarea
                  className={styles.textarea}
                  value={hubPostData.description}
                  onChange={(e) =>
                    setHubPostData({
                      ...hubPostData,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div className={styles.modalActions}>
                <div className={styles.actionsContainer}>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => {
                      setIsOpen(false);
                      OnCancel();
                    }}
                  >
                    Cancel
                  </button>
                  <button className={styles.submitBtn} type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default HubModal;
