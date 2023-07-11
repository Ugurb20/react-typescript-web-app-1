import { IEquatable } from '@domain/interfaces/equatable';
import { ISerializable } from '@domain/interfaces/serializable';
import { IUnique } from '@domain/interfaces/unique';

export interface ICalendarItem extends IEquatable, ISerializable, IUnique {}
