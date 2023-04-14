import React, { useEffect, useState } from "react";
import styles from "./chapter.module.css";
import { RiCloseLine } from "react-icons/ri";
import { axiosPublic } from "../../../../lib/axios/axios";
// import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const UsersModal = ({ setIsOpen, title, OnCancel, id, dataToPatch }) => {
  const [UserPostData, setUserPostData] = useState(
    dataToPatch
      ? {
          name: dataToPatch.name,
          institution: dataToPatch.institution,
          User_admin: dataToPatch.User_admin,
          description: dataToPatch.description,
        }
      : {
          name: "",
          institution: "",
          User_admin: "",
          description: "",
        }
  );

  useEffect(() => {
    if (id) {
      axiosPublic
        .get(`api/Users/${id}/`)
        .then((response) => setUserPostData(response.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleUserSubmit = (e) => {
    e.preventDefault();
    //If dataToPatch was passed Modal, call Patch, Else call Post and add new record
    if (dataToPatch) {
      // If an id prop is passed, update the User
      axiosPublic
        .patch(`api/Users/${dataToPatch.id}/`, UserPostData)
        .then(() => {
          setUserPostData({
            name: "",
            institution: "",
            User_admin: "",
            description: "",
          });
          console.log("Cleaned Up Post Data", UserPostData);
          setIsOpen(false);
        })
        .catch((error) => console.log(error));
    } else {
      axiosPublic
        .post("api/Users/", UserPostData)
        .catch((error) => console.log(error));

      setIsOpen(false);
    }

    // Post the UserPostData object to the API
    // console.log("Posting User data:", UserPostData);
    setUserPostData({
      name: "",
      institution: "",
      User_admin: "",
      description: "",
    });
  };

  return (
    <>
      <div>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>{title}</h5>
            </div>
            <button
              className={styles.closeBtn}
              onClick={() => setIsOpen(false)}
            >
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              {/* React Form */}

              <form onSubmit={handleUserSubmit}>
                <div className="form-group">
                  <label htmlFor="name">User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={UserPostData.name}
                    onChange={(e) =>
                      setUserPostData({
                        ...UserPostData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="institution">Institution</label>
                  <input
                    type="text"
                    className="form-control"
                    id="institution"
                    value={UserPostData.institution}
                    onChange={(e) =>
                      setUserPostData({
                        ...UserPostData,
                        institution: e.target.value,
                      })
                    }
                  />
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="3"
                    value={UserPostData.description}
                    onChange={(e) =>
                      setUserPostData({
                        ...UserPostData,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div class="form-group">
                  <label>User Admin</label>
                  <input
                    type="text"
                    className="form-control"
                    id="User_admin"
                    value={UserPostData.User_admin}
                    onChange={(e) =>
                      setUserPostData({
                        ...UserPostData,
                        User_admin: e.target.value,
                      })
                    }
                  />
                </div>

                {/* conditional rendering, if User modal button clicked == User, open User modal */}

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
      </div>
    </>
  );
};

export default UsersModal;
