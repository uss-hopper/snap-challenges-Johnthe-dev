-- noinspection SqlNoDataSourceInspectionForFile

drop table if exists Task;

create table Task(
	taskId binary(20) not null,
	taskDescription varchar(256),
	taskDueDate datetime(6),
	taskPriority varchar(64) not null,
	taskStartDate datetime(6),
	taskStatus varchar(64) not null,
	taskTitle varchar(255) not null,
	primary key(taskId)
);

