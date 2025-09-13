"use client";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ children, variant = 'default', className, ...props }) => {
    const badgeClass = classNames(
        'badge',
        {
            'badge-default': variant === 'default',
            'badge-primary': variant === 'primary',
            'badge-secondary': variant === 'secondary',
            'badge-success': variant === 'success',
            'badge-danger': variant === 'danger',
        },
        className
    );

    return (
        <span className={badgeClass} {...props}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger']),
    className: PropTypes.string,
};

export default Badge;