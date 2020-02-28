import React from 'react'
import style from './style.module.css'
import Navbar from './Navbar'
import DropBox from './DropBox'
import Menu from './menu.jpg'
import Avatar from './avatar.jpg'

export default class Header extends React.PureComponent {
    state = {
        isOpenedPopup: false,
    }

    myRef = React.createRef()

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isOpenedPopup === this.state.isOpenedPopup) {
            return
        }

        if (this.state.isOpenedPopup) {
            document.addEventListener('click', this.closePopup)
        } else {
            document.removeEventListener('click', this.closePopup)
        }
    }

    closePopup = event => {
        if (!this.myRef.current?.contains(event.target)) {
            this.setState({ isOpenedPopup: false })
        }
    }

    togglePopup = event => {
        this.setState({ isOpenedPopup: !this.state.isOpenedPopup })
    }

    render() {
        const { isOpenedPopup } = this.state
        return (
            <header className={style.Header}>
                <nav className={style.nawbar}>
                    <Navbar>Почта</Navbar>
                    <Navbar>Картинки</Navbar>
                    <Navbar click={this.togglePopup}>
                        <img src={Menu} />
                    </Navbar>
                    <Navbar>
                        <img src={Avatar} />
                    </Navbar>
                    {isOpenedPopup && <DropBox myRef={this.myRef} />}
                </nav>
            </header>
        )
    }
}
