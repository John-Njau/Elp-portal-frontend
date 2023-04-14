import React, { useEffect, useState } from "react";
import styles from "./chapter.module.css";
import { RiCloseLine } from "react-icons/ri";
import { axiosPublic } from "../../../../lib/axios/axios";
// import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";

const ChapterModal = ({
  setIsOpen,
  title,
  OnCancel,
  id,
  dataToPatch,
}) => {
  // const axiosInstance = useAxiosPrivate();
  // const [chapterList, setChapterList] = useState([]);
 //Setting the initial values for form fields to empty values.
//  const initialState = {
//   name: "",
//   institution: "",
//   chapter_admin:"",
//   description: "",
// };
  const [chapterPostData, setChapterPostData] = useState(
    dataToPatch?{
    name: dataToPatch.name,
    institution: dataToPatch.institution,
    chapter_admin: dataToPatch.chapter_admin,
    description: dataToPatch.description
    }
    :{
      name: "",
      institution: "",
      chapter_admin:"",
      description: "",
    }
  );

  useEffect(() => {
    if (id) {
      axiosPublic
        .get(`api/chapters/${id}/`)
        .then((response) => setChapterPostData(response.data))
        .catch((error) => console.log(error));
    }
  }, [id]);



  const handleChapterSubmit = (e) => {
    e.preventDefault();
//If dataToPatch was passed Modal, call Patch, Else call Post and add new record
    if (dataToPatch) {
      // If an id prop is passed, update the chapter
      axiosPublic
        .patch(`api/chapters/${dataToPatch.id}/`, chapterPostData)
        .then(() => {
          setChapterPostData({
            name: "",
            institution: "",
            chapter_admin:"",
            description: "",
          })
          console.log("Cleaned Up Post Data", chapterPostData)
          setIsOpen(false);
        })
        .catch((error) => console.log(error));
    } else {
      axiosPublic
        .post("api/chapters/", chapterPostData)
        .catch((error) => console.log(error));

      setIsOpen(false);
    }

    // Post the chapterPostData object to the API
    // console.log("Posting chapter data:", chapterPostData);
    setChapterPostData({
      name: "",
      institution: "",
      chapter_admin: "",
      description: "",
    });
  };

  return (
    <>
      <div >
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

              <form onSubmit={handleChapterSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Chapter Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value=
                      {chapterPostData .name}
               
                    onChange={(e) =>
                      setChapterPostData({
                        ...chapterPostData,
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
                    value={chapterPostData.institution}
                    onChange={(e) =>
                      setChapterPostData({
                        ...chapterPostData,
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
                    value={chapterPostData.description}
                    onChange={(e) =>
                      setChapterPostData({
                        ...chapterPostData,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div class="form-group">
                  <label>Chapter Admin</label>
                  <input
                    type="text"
                    className="form-control"
                    id="chapter_admin"
                    value={chapterPostData.chapter_admin}
                    onChange={(e) =>
                      setChapterPostData({
                        ...chapterPostData,
                        chapter_admin: e.target.value,
                      })
                    }
                  />
                </div>

                {/* conditional rendering, if chapter modal button clicked == chapter, open chapter modal */}

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

export default ChapterModal;
