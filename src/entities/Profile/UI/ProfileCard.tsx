import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileCard.module.scss'
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import Text, {SizeText, ThemeText} from 'shared/UI/Text/Text'
import {EditableProfileCard} from "features/editableProfileCard";
import {User} from "../../User";

interface ProfileProps {
    className?: string
    data: User
    error: string
}

const ProfileCard = (props: ProfileProps) => {

    const {
        className,
        error,
        data
    } = props

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
                    <img className={cls.avatar} alt='#'/>
                    <Button
                        className={cls.btn}
                        theme={ThemeButton.GREEN}
                        onClick={openHandler}
                    >
                        Редактировать
                    </Button>
                    <EditableProfileCard
                        data={data}
                        isOpen={isOpen}
                        onClose={closeHandler}
                    />
                </div>
            </div>
            <div className={cls.column}>
                <div className={cls.description}>
                    <Text
                        className={cls.name}
                        size={SizeText.L}
                        title={`${data?.name} ${data?.surname}`}
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