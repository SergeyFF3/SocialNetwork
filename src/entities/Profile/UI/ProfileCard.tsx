import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileCard.module.scss'
import {Profile} from "../model/types/profile";
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import Text, {SizeText, ThemeText} from 'shared/UI/Text/Text'
import Modal from "shared/UI/Modal/Modal";

interface ProfileProps {
    className?: string
    data: Profile
    error: string
}

const ProfileCard = (props: ProfileProps) => {

    const {
        className,
        error,
        data
    } = props

    const {user} = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))

    const [isOpen, setIsOpen] = React.useState(false)

    const closeHandler = React.useCallback(() => {
        setIsOpen(false)
    }, [])

    const openHandler = React.useCallback(() => {
        setIsOpen(true)
    }, [])

    if (error) {
        return (
            <div className={cls.error}>
                {error && <Text
                  theme={ThemeText.ERROR}
                  size={SizeText.L}
                  title={error}
                />}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.column}>
                <div className={cls.avatarWrapper}>
                    <img className={cls.avatar} alt='#' src={data?.avatar}/>
                    <Modal
                        isOpen={isOpen}
                        onClose={closeHandler}
                    >
                        <div className={cls.modal}>
                            <Text
                                size={SizeText.L}
                                title='Редактирование профиля'
                            />
                            <form>

                            </form>
                        </div>
                    </Modal>
                    <Button
                        className={cls.btn}
                        theme={ThemeButton.GREEN}
                        onClick={openHandler}
                    >
                        Редактировать
                    </Button>
                </div>
            </div>
            <div className={cls.column}>
                <div className={cls.description}>
                    <Text
                        className={cls.name}
                        size={SizeText.L}
                        title={`${user.name} ${user.surname}`}
                    />
                    <Text
                        className={cls.text}
                        text={`Возраст: ${data?.age}`}
                    />
                    <Text
                        className={cls.text}
                        text={`Город: ${data?.city}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProfileCard);