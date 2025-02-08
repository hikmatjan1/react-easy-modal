import { useState } from "react";
import ModalPortal from "./components/ModalPortal";
import "./App.css";

function App(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // open modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // close modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>Open Modal</button>

      <ModalPortal
        isOpen={modalIsOpen}
        onClose={closeModal}
        background={{
          color: "#00000050",
          blur: { size: "2px" },
          maxWidth: "",
          zIndex: 2
        }}
        modalContent={{
          width: "60%",
          isModalTop: {
            visible: false,
            name: "Modal name",
            fontSize: "18px",
            bgColor: "#012C6E",
            textColor: "white",
            radiusTopX: "12px",
            padding: "15px 20px"
          }
        }}
      >
        {/* children */}
        <div style={{ padding: "20px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div></div>
            <span onClick={closeModal} className='modal-overlay-close'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="19px" height="19px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "30px 0" }}>
            <img src="https://static.vecteezy.com/system/resources/previews/026/994/650/non_2x/welcome-concept-friendly-team-happy-to-new-team-member-online-event-celebrate-meeting-greeting-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" width="150px" />
            <h2>Welcome to Modal Group</h2>
            <div style={{ textAlign: "justify", fontSize: "16px" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est recusandae ipsum, ducimus maxime sint quam voluptates dolores, eum esse similique ullam molestias. Possimus deserunt corrupti commodi eaque, magnam minus eos cupiditate perferendis laudantium molestiae, tempore temporibus excepturi reiciendis velit libero voluptatum? Reprehenderit harum voluptatem consequuntur exercitationem pariatur et ab odit velit temporibus, consequatur tempora aperiam tempore sed ipsa asperiores nulla amet est at! Quod maiores iure nulla commodi quis? Harum totam sequi voluptate nisi cumque quae consectetur enim consequatur, quisquam sint autem aliquam at, corporis culpa, deserunt incidunt veniam repellat eveniet? Voluptas expedita ut fuga provident, maxime quidem facilis! Quas.
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
              <button type="button" style={{ color: "black", border: "none", padding: "10px 40px", borderRadius: "5px", cursor: "pointer" }} onClick={closeModal}>Cancel</button>
              <button type="button" style={{ background: "#012C6E", color: "white", border: "none", padding: "10px 40px", borderRadius: "5px", cursor: "pointer" }} onClick={closeModal}>Submit</button>
            </div>
          </div>
        </div>

      </ModalPortal>
    </>
  )
}

export default App;
