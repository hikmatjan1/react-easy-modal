# 🚀 React Flash Modal Component

A lightweight and flexible React modal component with smooth animations and easy customization. Perfect for modern web applications. Can be easily integrated into any project. Can be easily integrated into any project.

## 📦 Installation

Install via npm:

```bash
npm install react-flash-modal
```

Install via yarn:

```bash
yarn add react-flash-modal
```

## 🚀 Usage

```javascript
import { useState } from "react";
import { ModalPortal } from "react-flash-modal";

import "react-flash-modal/dist/modal.css"; // import CSS file (important)

function App() {
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

```

# Example

Click here to view. [here](https://react-easy-modal.netlify.app/)

## ⚙️ Props

| Prop | Description                                         | Type | Default |
|------|-----------------------------------------------------|------|---------|
| isOpen | To open/close a modal. | boolean | false |
| onClose | Function to be triggered when the modal is closed. | function | closeModal() |
| background | For general background. | object | { color: "#00000050", blur: { size: "2px" }, maxWidth: "", zIndex: 2 } |
| modalContent | To handle the general modal itself. | object | { width: "60%", isModalTop: {visible: false, name: "Modal name", ...} } |
| children | Content inside the modal. | React Node | |
| className | To add an additional class to a modal. | string | "" |

## Why Use `react-flash-modal`?

1. 🚀 Lightweight & Fast – Minimal bundle size for better performance.
2. 🎨 Fully Customizable – Easily style the modal to match your design.
3. 🛠️ Simple API – Intuitive props for quick integration.
4. 🎬 Smooth Animations – Built-in transitions for a modern look.
5. ⚡ Zero Dependencies – Works out of the box with React.
6. 📱 Responsive & Accessible – Optimized for all screen sizes and keyboard navigation.

Perfect for developers who need a flexible, easy-to-use modal component in React! 🚀

### Keywords

react-easy-modal, react-flash-modal, easy-react-modal, react-elevate-modal, react modal, modal component, react popup, easy modal, react dialog, modal with animation, lightweight modal, customizable modal, react-ui, modal for react, react easy modal, modal, react-smooth-modal, react-modal, react-lightbox-modal, react-awesome-modal, react-modern-modal, react-animated-modal, react-dialogx, react-glassy-modal, react-modal-pr"

## Development

To contribute or make changes, clone the repository and install dependencies:

```bash
git clone https://github.com/hikmatjan1/react-easy-modal.git
cd react-easy-modal
npm install
```

Run the development server:

```bash
npm run dev
```

## 📜 License

React Easy Modal is open-source and available under the MIT License.

## 🌟 Join and give a Star!

If you like this modal, please give it a star on the GitHub repository! ⭐

## Fixes

1. You can use it starting from version 1.0.6, in previous versions it gave an error because it could not find an element with id. This error has been fixed. I apologize for the inconvenience.