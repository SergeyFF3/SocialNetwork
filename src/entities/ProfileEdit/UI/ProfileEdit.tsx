import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileEdit.module.scss'
import {Profile} from "../../Profile";
import Text, {SizeText, ThemeText} from "../../../shared/UI/Text/Text";
import Input, {ThemeInput} from "../../../shared/UI/Input/Input";
import Button, {ThemeButton} from "../../../shared/UI/Button/Button";

interface ProfileEditProps {
    className?: string
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
            <form>
                <div className={cls.itemWrapper}>
                    <Text
                        className={cls.itemL}
                        text='Возраст:'
                    />
                    <Input
                        className={cls.itemR}
                        theme={ThemeInput.OUTLINE}
                        type='number'
                        value={formData?.age}
                        onChange={onChangeAge}
                    />
                </div>
                <div className={cls.itemWrapper}>
                    <Text
                        className={cls.itemL}
                        text='Текущий город:'
                    />
                    <Input
                        className={cls.itemR}
                        theme={ThemeInput.OUTLINE}
                        type='text'
                        value={formData?.city}
                        onChange={onChangeCity}
                    />
                </div>
                <div className={cls.itemWrapper}>
                    <Text
                        className={cls.itemL}
                        text='Родной город:'
                    />
                    <Input
                        className={cls.itemR}
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