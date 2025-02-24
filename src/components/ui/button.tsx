import React from 'react';

interface ButtonProps {
    label: string;
    href: string;
}

const Button: React.FC<ButtonProps> = ({ label, href }) => {
    return (
        <div className="flex justify-center">
            <a href={href}
                className="inline-block rounded-3xl px-6 py-3 bg-primary/100 text-white text-lg md:text-xl hover:bg-primary/60 transition-colors cursor-pointer normal-case">
                {label}
            </a>
        </div>
    );
}

export default Button;
