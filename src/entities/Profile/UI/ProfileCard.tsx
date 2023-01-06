import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileCard.module.scss'
import Button, {ThemeButton} from "shared/UI/Button/Button";
import Text, {AlignText, SizeText, ThemeText} from 'shared/UI/Text/Text'
import Modal from "shared/UI/Modal/Modal";
import {Profile} from '../model/types/profile';

interface ProfileProps {
    className?: string
    data: Profile
    error: string
    isOpen?: boolean
    onClose?: () => void
    onOpen?: () => void
    navigate?: () => void
}

const ProfileCard = (props: ProfileProps) => {

    const {
        className,
        error,
        isOpen,
        onClose,
        onOpen,
        data,
        navigate
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
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.headerProfile}>
                <select className={cls.selectHeader}>
                    <option>Красный</option>
                </select>
            </div>
            <div className={cls.headerBottom}>
                <div className={cls.avatarWrapper}>
                    <img className={cls.avatar}/>
                </div>
                <div className={cls.info}>
                    <div className={cls.username}>
                        <Text
                            size={SizeText.L}
                            title={`${data?.firstname} ${data?.lastname}`}
                        />
                        <Button
                            theme={ThemeButton.NORMAL}
                            onClick={navigate}
                        >
                            Редактировать профиль
                        </Button>
                    </div>
                    <div className={cls.description}>
                        <p className={cls.item}>{data?.city}</p>
                        <p className={cls.item}>{data?.hometown}</p>
                        <Button
                            className={cls.item}
                            theme={ThemeButton.CLEAR}
                            onClick={onOpen}
                        >
                            Подробнее
                        </Button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <div className={cls.modal}>
                    <Text
                        className={cls.detailInfo}
                        align={AlignText.LEFT}
                        size={SizeText.M}
                        title='Подробная информация'
                    />
                    <div className={cls.id}>{data?.id}</div>
                    <div className={cls.detailDesc}>
                        <Text
                            className={cls.itemModal}
                            text={`Возраст: ${data?.age}`}
                        />
                        <Text
                            className={cls.itemModal}
                            text={`Город: ${data?.city}`}
                        />
                        <Text
                            className={cls.itemModal}
                            text={`Родной город: ${data?.hometown}`}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default React.memo(ProfileCard);