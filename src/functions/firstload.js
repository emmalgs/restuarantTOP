import { header } from "../pages/header";
import { home } from "./home";
import { pageload } from "./pageload";

export function firstload() {
    pageload()
    home()
}