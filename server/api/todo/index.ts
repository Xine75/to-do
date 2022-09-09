import {defineEventHandler} from "h3";
import { db } from "../../db";

export default defineEventHandler(() => {
    return db.todos
})
