import {combineReducers} from 'redux'
const default_holiday_type = [
    {
        id:1,
        type:'年假',
        status:1,
        max_time:0,
        period:1,
        default:1,
        attachment:0,
    },
    {
        id:2,
        type:'调休',
        status:1,
        max_time:0,
        period:1,
        default:1,
        attachment:0,
    },
    {
        id:3,
        type:'奖励假',
        status:1,
        max_time:0,
        period:1,
        default:1,
        attachment:0,
    },
    {
        id:4,
        type:'test',
        status:1,
        max_time:0,
        period:1,
        default:0,
        attachment:0,
    },
];
const default_award = [
    {
        id:1,
        member_name:'QxQsatr',
        work_num:123,
        department_name:'Web奇安达',
        total_day:12,
        remove_day:10
    },
    {
        id:2,
        member_name:'东方酒店',
        work_num:123,
        department_name:'HpH奇安达',
        total_day:12,
        remove_day:10
    },
    {
        id:3,
        member_name:'大多数',
        work_num:123,
        department_name:'PHP奇安达',
        total_day:12,
        remove_day:10
    }
];
function holiday_type(holiday_type=default_holiday_type,action) {
    switch (action.type){
        case 'add_type':
            return [...holiday_type,{...action.params,...{id:new Date().getTime(),status:1}},];
        case 'edit_type':
            return holiday_type.map(type => {
                if(type.id === action.params.id){
                    return action.params
                } else {
                    return type
                }
            });
        case 'del_type':
            return holiday_type.filter(type => {
                return type.id !== action.params.id
            });
        case 'change_status':
            return holiday_type.map(type => {
                if(type.id === action.params.id){
                    return Object.assign({},type,{status:action.params.status})
                } else {
                    return type
                }
            });
        default:
            return holiday_type
    }
}

function award(award=default_award,action) {
    switch(action.type){
        case 'selectAll_award':
            return award.map((item) => {
                return {...item,...action.params}
            });
        case 'selectOne_award':
            return award.map(item => {
                if(item.id === action.params.id){
                    return action.params;
                } else {
                    return item
                }
            });
        case 'del_award':
            return award.filter(item => {
                return item.id !== action.params.id
            });
        case 'del_award_batch':
            return award.filter(item => {
                return !item.checked
            });
        case 'add_award':
            return [...award,{...action.params,...{id:new Date().getTime()}}]
        case 'edit_award':
            return award.map(item => {
                if(item.id === action.params.id){
                    return {...item,...action.params}
                } else {
                    return item
                }
            });
        default:
            return award
    }
}
export default combineReducers({
    holiday_type,
    award
})