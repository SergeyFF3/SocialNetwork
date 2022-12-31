import React, {ReactNode} from 'react';
import {classNames} from "shared/helpers/classNames/classNames";
import cls from './Modal.module.scss'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300

const Modal = (props: ModalProps) => {

    const {
        className,
        onClose,
        isOpen,
        children
    } = props

    const [ isClosing, setIsClosing ] = React.useState(false)

    const timerRef = React.useRef<ReturnType<typeof setTimeout>>()

    const closingHandler = React.useCallback(() => {
        if(onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose()
                setIsClosing(false)
            }, ANIMATION_DELAY)
        }
    }, [onClose])

    const onContentClick = React.useCallback((e: React.MouseEvent) => {
        e.stopPropagation()
    }, [])

    React.useEffect(() => {
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [])

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing
    }

    return (
        <div className={classNames(cls.Modal, mods, [className])}>
           <div
               className={cls.overlay}
               onClick={closingHandler}
           >
               <div
                   className={cls.content}
                   onClick={onContentClick}
               >
                   {children}
               </div>
           </div>
        </div>
    );
};

export default Modal;