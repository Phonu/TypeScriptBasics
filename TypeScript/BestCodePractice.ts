
/*
==================================== FOLDER STRUCTURE ==================================================
1. Folder and Files conventions:
    - A folder and sub folder name should always start with small letters and the files that belongs to the folders in pascal cases.
        https://github.com/microsoft/fluentui/blob/master/packages/react-components/react-button/src/Button.tsx
2. if you are using seperate files for props, styles etc
    Header.tsx
    Header.props.ts
    Header.styles.ts

3. Give your components and file names same.
    Header.tsx
    const Header = () => {}

==================================== NAMING CONVENTIONS ==================================================

4. Maintain a proper import structure(third party import first -> internal imports below)
    - Naming Conventions
    - PascalCase for component's name.
    - camelCase for naming variables, Hooks, functions and arrays.

    - Handle negative user journeys:
        What will happen of the user input is not there and someone click on button
        What will happen if the user is no matching search result.
        What will happen when the API will throw an error.


==================================== OBJECT DESTURCTURE ==================================================

5. Use object destructing for props
    Instead of passing the props objects destructing to pass the props name. This discards the need to refer to the props object each time you need to use it.

    const Button = ({text}) => { 
    return <View>{text}</View>
    }

6. Use fragments instead of Views when ever possible.
    - Elimate unnecessary <View> tags when returning a single elements.

        <>
        <OneChild>
        <AnotherChild>
        <>
7. Don't write inline functions
    Good Code:
        const handleOnClick = () => {}
        <Button title={} onPress={handleOnClick}>

8. JSX conventions
    - Use JSX shortand for passing boolean variables
     return <Button disabled />

9. Use ternary operator instead of if-else statements.
    return isLoading ? abc : pqr

10. Use object(Map) instead of the switch statements.

    Good Code:
        const componentMap = {
            ADMIN: 'Admin',
            USER: 'user',
            NOT_FOUND: 'not found'
        }

    Bad Code
        switch (props.type) {
            case "ADMIN"
                return <ADMIN />
            case "USER"
                return <USER />
            default:
                return <NotFound />
        }

11. Using spread operator
        const arr = [1,2,3];
        const arr1 = [...arr];
        arr2.push(4);

        //arr2 => [1,2,3,4]
        //arr becomes unaffected

12. Using Null Coaleasing operator.
13. Using optional operator.

==================================== MANAGING PACKAGE VERSIONS ==================================================

14. Format package versions -- {major}.{minor}.{patch}
        - upgrade patch version and minor version in lock.json -> 2.x.x => "^2.5.3"
        - upgrade patch in lock.json -> 2.5.x => "~2.5.3"
        - exact version => "2.5.3"
        - latest version available => "*"

    -> Use fixed verion or patch (~) update, try to limit minor versions.
    -> Never use wildcard (*) version.


15. Recommended Extentions to use on VSCode IDE.
    - Eslint
    - prettier


*/