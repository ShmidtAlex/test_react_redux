//папка reducers нужна чтобы разделять код разных редюсеров и сделать его более поддерживаемым.
// этот файл собирает все редюсеры, например issues.js
import { combineReducers } from 'redux';
import issues from './issues';