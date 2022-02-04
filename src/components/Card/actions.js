import python_icon from '../../assets/img/icon-python.svg';
import sass_icon from '../../assets/img/icon-sass.svg';
import java_icon from '../../assets/img/icon-java.svg';
import php_icon from '../../assets/img/icon-php.svg';
import html_icon from '../../assets/img/icon-html.svg';
import vue_icon from '../../assets/img/icon-vue.svg';
import css_icon from '../../assets/img/icon-css.svg';
import javascript_icon from '../../assets/img/icon-javascript.svg';
export default function returnLanguageImage(language) {
    switch (language?.toLowerCase()) {
        case 'python':
            return python_icon;
        case 'scss':
            return sass_icon;
        case 'css':
            return css_icon;
        case 'java':
            return java_icon;
        case 'php':
            return php_icon;
        case 'html':
            return html_icon;
        case 'vue':
            return vue_icon;
        case 'javascript':
            return javascript_icon;
        default:
            return python_icon;
    }
}
