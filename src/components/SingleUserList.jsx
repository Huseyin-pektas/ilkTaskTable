import React,{useEffect, useState} from 'react'

const SingleUserList = ({ users }) => {

    //  burada filtreleme için state tutacağım
    const [searcTerm, setSearcTerm] = useState("")
    const [filteredUsers, setFilteredUsers] = useState(users)

    const handleSearch =()=>{
        const filtered = users.filter(user => user.name.toLowerCase().includes(searcTerm.toLowerCase())
         ||user.username.toLowerCase().includes(searcTerm.toLowerCase())
        
    )
    const sorted = filtered.sort((a,b)=>{
        if(a.name.toLowerCase()< b.name.toLowerCase()) return-1;
        if(a.name.toLowerCase()> b.name.toLowerCase()) return 1;
        return 0;
    })
    setFilteredUsers(sorted)

    if(filtered.length === 0){
        alert("arama kreterlerine uygun arama yapınız")
    }
    console.log(filtered)
    setFilteredUsers(filtered)
    }
    useEffect(() => {
        setFilteredUsers(users);
      
    }, [users]);

    return (
        <div>
            {/*  burada ekrana yazdırdığım usersları arama yapacapım yer */}
            <div className="input-group d-flex justify-content-center align-item-center my-1  ">
                <input
                    className='rounded-3 border '
                    type="text"
                    value={searcTerm}
                    placeholder="Username"
                    onChange={(e) => setSearcTerm(e.target.value)}
                />
                <button onClick={handleSearch}
                    type="button"
                    className="btn 
                     rounded-3  btn-info"
                >
                    Arama yapınız
                </button>
            </div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Sıra No</th>
                        <th>Adı</th>
                        <th>Soyadı</th>
                        <th>E-mail </th>
                        <th>Telefon No </th>
                        <th>Website </th>
                        <th>Adresi </th>
                        <th>Şirketi </th>
                    </tr>
                </thead>
                <tbody>
                    {/*  Burada app componetinden gelen probsları map ile ekrana yazdırdım */}

                    {filteredUsers.length === 0 ? (
                        <h3 className='text-center my-2 text-white'> Aradığınız  kişi listemizde kayıtlı değildir !!</h3>
                    ):(
                        filteredUsers.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.street}
                                        {user.address.suite}
                                        {user.address.city}
                                        {user.address.zipcode}
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SingleUserList
