import fs from "fs"
import { RedisManager } from "../RedisManger";
import { ORDER_UPDATE, TRADE_ADDED } from "../types";
import { CANCEL_ORDER, CREATE_ORDER, GET_DEPTH, GET_OPEN_ORDERS, MessageFromApi, ON_RAMP } from "../types/fromAPI";
import {Fill, Order, Orderbook} from "./Orderbook"