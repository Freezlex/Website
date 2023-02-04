import React, {Component, useEffect} from "react";
import useDecrypt from "../shared/useDecrypt";

const decryptOptions = {
    chars: [
        "-",
        ".",
        "/",
        "*",
        "!",
        "?",
        "#",
        "%",
        "&",
        "@",
        "$",
        "€",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "<",
        ">",
        "~",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ],
    interval: 50,
};

export const TextDecrypt = (props: { text: string; className: string}) => {
    const { result, dencrypt } = useDecrypt(decryptOptions);

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <a className={props.className}>
            {result}
            {" "}
        </a>
    );
};
