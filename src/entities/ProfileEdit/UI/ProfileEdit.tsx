import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileEdit.module.scss'
import {Profile} from "../../Profile";
import Text, {SizeText, ThemeText} from "../../../shared/UI/Text/Text";
import Input, {ThemeInput} from "../../../shared/UI/Input/Input";
import Button, {ThemeButton} from "../../../shared/UI/Button/Button";

interface ProfileEditProps {
    className?: string
    data?: Profile
    formData?: Profile
    error?: string
    onChangeAge?: (value?: number) => void
    onChangeHometown?: (value?: string) => void
    onChangeCity?: (value?: string) => void
    cancelEdit?: () => void
    saveData?: () => void
}

const ProfileEdit = (props: ProfileEditProps) => {

    const {
        className,
        data,
        formData,
        error,
        onChangeAge,
        cancelEdit,
        onChangeCity,
        onChangeHometown,
        saveData
    } = props

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
        <div className={classNames(cls.ProfileEditCard, {}, [className])}>
            {data?.city} {data?.age} {data?.hometown}
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
        </div>
    );
};

export default React.memo(ProfileEdit);