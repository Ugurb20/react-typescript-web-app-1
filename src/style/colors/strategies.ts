import { ColorStrategy } from '@domain/types/common/color-strategy';
import { STATUS_COLORS } from '@quicker/style/colors/status';

export const COMPLETED_COLOR_STRATEGY: ColorStrategy = {
	background: STATUS_COLORS.COLOR_APPOINTMENT_PENDING_BACKGROUND,
	text: STATUS_COLORS.COLOR_APPOINTMENT_PENDING_TEXT,
	header: STATUS_COLORS.COLOR_APPOINTMENT_PENDING_HEADER,
	headerCard: STATUS_COLORS.COLOR_APPOINTMENT_PENDING_HEADER_CARD,
};
