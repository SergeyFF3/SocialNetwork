import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileCard.module.scss'
import Button, {ThemeButton} from "shared/UI/Button/Button";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";
import Text, {AlignText, SizeText, ThemeText} from 'shared/UI/Text/Text'
import Input, {ThemeInput} from "shared/UI/Input/Input";
import Modal from "shared/UI/Modal/Modal";
import {Profile} from "features/editableProfileCard";

interface ProfileProps {
    className?: string
    formData: Profile
    onChangeAge?: (value: number) => void
    isOpen?: boolean
    onClose?: () => void
    onOpen?: () => void
    error: string
    onChangeHometown: (value: string) => void
    onChangeCity: (value: string) => void
    cancelEdit: () => void
    saveData?: () => void
}

const ProfileCard = (props: ProfileProps) => {

    const {
        className,
        error,
        isOpen,
        onClose,
        onOpen,
        formData,
        onChangeAge,
        cancelEdit,
        onChangeCity,
        onChangeHometown,
        saveData
    } = props

    const {user} = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY))

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
                    <img className={cls.avatar} alt='#' src={formData?.avatar}/>
                    <Button
                        className={cls.btn}
                        theme={ThemeButton.GREEN}
                        onClick={onOpen}
                    >
                        Редактировать
                    </Button>
                    <Modal
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <Text
                            className={cls.editing}
                            align={AlignText.CENTER}
                            size={SizeText.L}
                            title='Редактирование профиля'
                        />
                        <form>
                            <div className={cls.item}>
                                <Text
                                    className={cls.age}
                                    text='Возраст:'
                                />
                                <Input
                                    theme={ThemeInput.OUTLINE}
                                    type='text'
                                    value={formData?.age}
                                    onChange={onChangeAge}
                                />
                            </div>
                            <div className={cls.item}>
                                <Text
                                    className={cls.city}
                                    text='Текущий город:'
                                />
                                <Input
                                    theme={ThemeInput.OUTLINE}
                                    type='text'
                                    value={formData?.city}
                                    onChange={onChangeCity}
                                />
                            </div>
                            <div className={cls.item}>
                                <Text
                                    className={cls.hometown}
                                    text='Родной город:'
                                />
                                <Input
                                    theme={ThemeInput.OUTLINE}
                                    type='text'
                                    value={formData?.hometown}
                                    onChange={onChangeHometown}
                                />
                            </div>
                            <div className={cls.btnForm}>
                                <Button
                                    theme={ThemeButton.NORMAL}
                                    className={cls.btnCancel}
                                    onClick={cancelEdit}
                                >
                                    Вернуть
                                </Button>
                                <Button
                                    theme={ThemeButton.GREEN}
                                    className={cls.btnEdit}
                                    onClick={saveData}
                                >
                                    Сохранить
                                </Button>
                            </div>
                        </form>
                    </Modal>
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
                        text={`Возраст: ${formData?.age}`}
                    />
                    <Text
                        className={cls.text}
                        text={`Город: ${formData?.city}`}
                    />
                    {formData?.hometown && <Text
                      className={cls.text}
                      text={`Родной город: ${formData?.hometown}`}
                    />}
                </div>
            </div>
        </div>
    );
};

export default React.memo(ProfileCard);