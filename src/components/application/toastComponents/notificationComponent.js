import React, { useState, useEffect } from 'react'
import errorComponent from './errorComponent';
import warningComponent from './warningComponent';
import successComponent from './successComponent';

export const ToastType = {
    Error: 'error',
    Success: 'success',
    Warning: 'warning'
}

export default function NotificationComponent({ type, message }) {
    let [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 4000);
        return () => clearTimeout(timer);
      }, []);
    switch (type) {
        case ToastType.Error:
            return isVisible && errorComponent(message);
        case ToastType.Warning:
            return isVisible && warningComponent(message);
        case ToastType.Success:
            return isVisible && successComponent(message);
        default:
            return {};
    }
}