import React, { memo, useEffect, useRef } from 'react';
import ReactDOM from "react-dom";

const ModalPortal = (props) => {
    const { isOpen = false, onClose, background, modalContent, children = "" } = props;
    const { color = "#00000050", blur, maxWidth, zIndex = 2 } = background;
    const { width = "60%", isModalTop } = modalContent;
    const { visible = true, bgColor = "blue", name = "", textColor = "white", radiusTopX = "12px", fontSize = "18px", padding = "15px 20px" } = isModalTop;
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose(); // Closes when pressed outwards
        }
    };

    useEffect(() => {
        // check modal overlay id
        let modalOverlay = document.getElementById("root_modal_overlay_element");

        if (!modalOverlay) {
            let div = document.createElement("div");
            div.id = "root_modal_overlay_element";
            document.body.appendChild(div);
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={`modal-overlay-container`}
            style={{ backgroundColor: color, backdropFilter: `blur(${blur?.size})`, maxWidth, zIndex }}
        >
            <div className='modal-overlay-block' ref={modalRef}
                style={{ width }}
            >
                {visible && (
                    <div className='modal-overlay-top'
                        style={{
                            backgroundColor: bgColor,
                            color: textColor,
                            borderTopRightRadius: radiusTopX,
                            borderTopLeftRadius: radiusTopX,
                            padding
                        }}
                    >
                        <div>
                            <span style={{ fontSize }}>{name}</span>
                        </div>
                        <span onClick={onClose} className='modal-overlay-close'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill={textColor} viewBox="0 0 24 24" width="19px" height="19px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" /></svg>
                        </span>
                    </div>
                )}

                {children}
            </div>
        </div>,
        document.getElementById("root_modal_overlay_element") // The DOM element where the portal is located.
    );
}

export default memo(ModalPortal);