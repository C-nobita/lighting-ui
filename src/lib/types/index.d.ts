/* eslint-disable max-classes-per-file */
import { App } from 'vue'
// import { HaloComponent } from './component';
import { Aside } from "./Aside"
import { Button } from "./Button"
import { Dialog } from "./Dialog"
import { Dropdown } from "./Dropdown"
import { Header } from "./Header"
import { Table } from "./Table"
import { Carousel } from "./Carousel"
import { DatePicker } from "./DatePicker"
import { Tabs } from "./Tabs"
import { TabsItem } from "./TabsItem"
import { Switch } from "./Switch"
import { Loading } from "./Loading"

// export const version: string;

export const install: (app: App) => any

// export class Aside extends HaloComponent { }
// export class Button extends HaloComponent { }
// export class Dialog extends HaloComponent { }
// export class Dropdown extends HaloComponent { }
// export class Header extends HaloComponent { }


export {
  Aside,
  Button,
  Dialog,
  Dropdown,
  Header,
  Table,
  Carousel,
  DatePicker,
  Tabs,
  TabsItem,
  Switch,
  Loading
}
