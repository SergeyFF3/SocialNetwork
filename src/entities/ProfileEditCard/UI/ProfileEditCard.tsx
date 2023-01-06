import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileEditCard.module.scss'
import {Profile} from "../../Profile";
import Input, {ThemeInput} from "shared/UI/Input/Input";
import Button, {ThemeButton} from 'shared/UI/Button/Button';
import Text from 'shared/UI/Text/Text'

interface ProfileEditCardProps {
    className?: string
    data?: Profile
    onChangeAge?: (value: number) => void
    onChangeHometown: (value: string) => void
    onChangeCity: (value: string) => void
    cancelEdit: () => void
    saveData?: () => void
}

const ProfileEditCard = (props: ProfileEditCardProps) => {

    const {
        className,
        data,
        onChangeAge,
        cancelEdit,
        onChangeCity,
        onChangeHometown,
        saveData
    } = props

    return (
        <div className={classNames(cls.ProfileEditCard, {}, [className])}>
            {data?.city}
            <form>
                <div className={cls.item}>
                    <Text
                        className={cls.age}
                        text='Возраст:'
                    />
                    <Input
                        theme={ThemeInput.OUTLINE}
                        type='text'
                        value={data?.age}
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
                        value={data?.city}
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
                        value={data?.hometown}
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

export default React.memo(ProfileEditCard);