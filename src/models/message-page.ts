import { MessageInfo } from './message-info';

/**
 * Message分页实体
 *
 * @export
 * @interface MessagePage
 */
export class MessagePage {
  data?: MessageInfo[];
  currentPage?: number;
  total?: number;
}
