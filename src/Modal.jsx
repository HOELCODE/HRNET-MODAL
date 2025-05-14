const closeModal = () => {
    const modal = document.querySelector('.modal');
    const page = document.querySelector('.home-container');
    const cross = document.querySelector('.close');

    //Actions
    cross.addEventListener('click', () => {
        page.style.filter = "none";
        modal.style.display = "none";
        modal.classList.remove('modal-showed')
    })
}


const Modal = () => {
    return (
        <>
            <div className="modal-container">
                <div className="modal">
                    <div className='cross-container' onClick={closeModal}>
                        <span className="close">&times;</span>
                    </div>
                    <div className="modal-content">
                        <h2>Employee Created!</h2>
                    </div>
                </div>
            </div>

            <style>
                {`

                    .modal-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    filter: blur(2px);
                    transition: filter 0.3s ease;
                    }

                    .modal {
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    padding: 15px 70px;
                    position: relative;
                    width: 154px;
                    display: none;
                    background-color: #fff;
                    z-index: 1000;
                    }

                    .modal-content {
                        display: flex;;
                        flex-direction: column;
                        align-items: center;
                    }

                    .modal-showed {
                    top: 50%;
                    position: fixed;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    z-index: 1000 !important;
                    display: block;
                    }

                    .cross-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        padding: 5px 5px;
                        background-color: #000;
                        border-radius: 50px;
                        height: 15px;
                        width: 15px;
                    }

                    .close {
                        position: absolute;
                        font-size: 16px;
                        cursor: pointer;
                        color: #fff;
                    }

                    .modal h2 {
                        font-size: 16px;
                        padding: 0;
                        margin: 0;
                    }
                `}
            </style>
        </>
    )

}

export default Modal;