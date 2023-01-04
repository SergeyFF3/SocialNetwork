import React from 'react';
import cls from './EditableProfileCard.module.scss'
import Modal from "shared/UI/Modal/Modal";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import {Profile} from "pages/ProfilePage/model/types/profile";
import Text, {AlignText, SizeText} from 'shared/UI/Text/Text'
import Input, {ThemeInput} from "shared/UI/Input/Input";

interface EditableProfileCardProps {
    data?: Profile
    isOpen?: boolean
    onClose?: () => void
}

const EditableProfileCard = (props: EditableProfileCardProps) => {

    const {
        data,
        isOpen,
        onClose
    } = props

    return (
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
                        theme={ThemeInput.CLEAR}
                        type='text'
                        value={String(data?.age)}
                    />
                </div>
                <div className={cls.item}>
                    <Text
                        className={cls.city}
                        text='Текущий город:'
                    />
                    <Input
                        theme={ThemeInput.CLEAR}
                        type='text'
                        value={data?.city}
                    />
                </div>
                <div className={cls.item}>
                    <Text
                        className={cls.hometown}
                        text='Родной город:'
                    />
                    <Input
                        theme={ThemeInput.CLEAR}
                        type='text'
                        value={data?.hometown}
                    />
                </div>
                <div className={cls.btnForm}>
                    <Button
                        theme={ThemeButton.NORMAL}
                        className={cls.btnCancel}
                    >
                        Отменить
                    </Button>
                    <Button
                        theme={ThemeButton.GREEN}
                        className={cls.btnEdit}
                    >
                        Сохранить
                    </Button>
                </div>
            </form>
    </Modal>
    );
};

export default React.memo(EditableProfileCard);