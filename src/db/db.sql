create table accounts
(
    id           serial primary key,
    user_name    varchar(255) unique not null,
    password     varchar(255)        not null,
    role         varchar(255)        not null,
    creatated_at timestamp default current_timestamp
);

create table parents
(
    id             serial primary key,
    account_id     int references accounts (id),
    parent_name    varchar(255) not null,
    phone          varchar(25)  not null,
    address        varchar(25)  not null,
    avatar         varchar(25),
    emergecy_phone varchar(25)  not null
);

create table sitters
(
    id            serial primary key,
    account_id    int references accounts (id),
    sitter_name   varchar(255) not null,
    phone         varchar(25)  not null,
    address       varchar(25)  not null,
    sex           boolean      not null,
    avatar        varchar(25),
    certification text         not null,
    year_ex       int          not null,
    hourly_salary float        not null,
    state         boolean      not null,
    rate          float,
    food          text         not null,
    language      text         not null
);

create table feedback
(
    id        serial primary key,
    parent_id int references parents (id),
    sitter_id int references sitters (id),
    data      text  not null,
    rate      float not null
);

create table requests(
                         id serial primary key,
                         parent_id int references parents (id),
                         sitter_id int references sitters (id),
                         start_time timestamp not null,
                         end_time timestamp not null,
                         data text not null ,
                         state varchar(255) not null,
                         created_at timestamp default current_timestamp,
                         feedback_id int references feedback (id)
)