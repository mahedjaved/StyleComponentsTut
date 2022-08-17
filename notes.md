# Basics Desc

> SComps came as a result of finding ways to enhance CSS styling for React

> SComps can handle the following

    > Automatic critical CSS --> keep track of which components are rendered on a page and inject their styles

    > No class name bugs --> SComps generate unique class names for your styles, NO WORRY 4 Duplication, Overlap or Misspellings

    > Easier deletion of CSS --> difficult to know whether a classname is used elsewhere in CSS --> this is not an issue in SComps because here, each SComp is tied to a React Component --> if SComp is not used (as in not tield to a React Component) it automatically gets deleted

# Usage

> SComps use "tagged template literals"

> First you set this line :: import styled from "styled-components";

> THen, have for example:->

    const Title = styled.h1`
        font-size: XX;
        text-align: XX;
        color: XX;
    `}

> Removes mapping between components and styles --> meaning when you define styles, you ARE making a React component

> You can add props to SComps by using template literals

# Adding props to SComps

> Add props with JSX style code e.g.

    const Button = styled.button`
        background: ${props => props.primary ? "palevioletred" : "white};
        color: ${props => props.primary ? "white" : "palevioletred"}
    `;

# Extending Styles

>
