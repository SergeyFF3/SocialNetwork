import React from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './ProfileCard.module.scss'
import Button, {ThemeButton} from "shared/UI/Button/Button";
import Text, {AlignText, ColorText, SizeText, ThemeText} from 'shared/UI/Text/Text'
import Modal from "shared/UI/Modal/Modal";
import {Profile} from "../model/types/profile";
import Avatar from "shared/UI/Avatar/Avatar";
import BgSwitcher, {BgProfileColor} from "widgets/BgSwitcher/BgSwitcher";
import {User} from 'entities/User';

interface ProfileProps {
    className?: string
    data: Profile
    isAuth: User
    error: string
    isOpen?: boolean
    onClose?: () => void
    onOpen?: () => void
    navigateEdit?: () => void
    bgColor: BgProfileColor
    onChangeBgColor: (value: BgProfileColor) => void
}

const ProfileCard = (props: ProfileProps) => {

    const {
        className,
        error,
        isOpen,
        onClose,
        onOpen,
        data,
        isAuth,
        navigateEdit,
        bgColor,
        onChangeBgColor
    } = props

    if (error) {
        return (
            <div className={cls.error}>
                <Text
                  theme={ThemeText.ERROR}
                  size={SizeText.L}
                  title={error}
                />
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={classNames(cls.headerProfile, {}, [cls[bgColor]])}>
                {isAuth ?  <div className={cls.selectHeader}>
                    <BgSwitcher
                        value={bgColor}
                        onChange={onChangeBgColor}
                    />
                </div>
                : null}
            </div>
            <div className={cls.headerBottom}>
                <div className={cls.avatarWrapper}>
                    {data?.avatar && <Avatar
                      src={data?.avatar}
                      alt='Аватар пользователя'
                      size={140}
                    />}
                </div>
                <div className={cls.info}>
                    <div className={cls.username}>
                        <Text
                            size={SizeText.L}
                            title={`${data?.firstname} ${data?.lastname}`}
                        />
                        {isAuth ? <Button
                            theme={ThemeButton.NORMAL}
                            onClick={navigateEdit}
                        >
                            Редактировать профиль
                        </Button>
                        : null}
                    </div>
                    <div className={cls.description}>
                        <p className={cls.item}>{data?.city}</p>
                        <p className={cls.item}>{data?.age}</p>
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
                    <div className={cls.id}>@ {data?.id}</div>
                    <div className={cls.detailDesc}>
                        <span className={cls.itemModal}>
                           <Text
                               className={cls.span}
                               text={`Возраст:`}
                           />
                          <Text
                              color={ColorText.MEDIUMPURPLE}
                              text={String(data?.age)}
                          />
                        </span>
                        <span className={cls.itemModal}>
                           <Text
                               className={cls.span}
                               text={`Город:`}
                           />
                           <Text
                               color={ColorText.MEDIUMPURPLE}
                               text={data?.city}
                           />
                        </span>
                        <span className={cls.itemModal}>
                          <Text
                              className={cls.span}
                              text={`Родной город:`}
                          />
                         <Text
                             color={ColorText.MEDIUMPURPLE}
                             text={data?.hometown}
                         />
                        </span>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default React.memo(ProfileCard);